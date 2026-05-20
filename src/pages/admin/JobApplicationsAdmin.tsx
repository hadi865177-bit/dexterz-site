import { useState, useEffect } from "react";
import { supabase, JobApplication } from "@/lib/supabase";
import AdminLayout from "@/components/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, Mail, Calendar, FileText, Briefcase, Trash2 } from "lucide-react";
import BrandedLoader from "@/components/ui/BrandedLoader";
import { useToast } from "@/hooks/use-toast";
import DeleteModal from "@/components/ui/DeleteModal";

const JobApplicationsAdmin = () => {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterPosition, setFilterPosition] = useState<string>("all");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [bulkDeleteModalOpen, setBulkDeleteModalOpen] = useState(false);
  const [applicationToDelete, setApplicationToDelete] = useState<{ id: string; name: string } | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("job_applications")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setApplications(data || []);
    } catch (error) {
      console.error("Error fetching applications:", error);
      toast({
        title: "Error",
        description: "Failed to load applications",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateApplicationStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from("job_applications")
        .update({ status, updated_at: new Date().toISOString() })
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Status Updated",
        description: "Application status has been updated successfully",
      });

      fetchApplications();
    } catch (error) {
      console.error("Error updating status:", error);
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    }
  };

  const deleteApplication = async (id: string, name: string) => {
    setApplicationToDelete({ id, name });
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!applicationToDelete) return;

    try {
      const { error } = await supabase
        .from("job_applications")
        .delete()
        .eq("id", applicationToDelete.id);

      if (error) throw error;

      toast({
        title: "Application Deleted",
        description: "Application has been deleted successfully",
      });

      fetchApplications();
      setApplicationToDelete(null);
    } catch (error) {
      console.error("Error deleting application:", error);
      toast({
        title: "Error",
        description: "Failed to delete application",
        variant: "destructive",
      });
    }
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredApplications.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredApplications.map(app => app.id));
    }
  };

  const toggleSelectOne = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleBulkDelete = () => {
    if (selectedIds.length === 0) {
      toast({
        title: "No Selection",
        description: "Please select applications to delete",
        variant: "destructive",
      });
      return;
    }
    setBulkDeleteModalOpen(true);
  };

  const confirmBulkDelete = async () => {
    try {
      const { error } = await supabase
        .from("job_applications")
        .delete()
        .in("id", selectedIds);

      if (error) throw error;

      toast({
        title: "Applications Deleted",
        description: `${selectedIds.length} application(s) deleted successfully`,
      });

      setSelectedIds([]);
      fetchApplications();
    } catch (error) {
      console.error("Error deleting applications:", error);
      toast({
        title: "Error",
        description: "Failed to delete applications",
        variant: "destructive",
      });
    }
  };

  const handleBulkStatusChange = async (newStatus: string) => {
    if (selectedIds.length === 0) {
      toast({
        title: "No Selection",
        description: "Please select applications to update",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from("job_applications")
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .in("id", selectedIds);

      if (error) throw error;

      toast({
        title: "Status Updated",
        description: `${selectedIds.length} application(s) updated to ${newStatus}`,
      });

      setSelectedIds([]);
      fetchApplications();
    } catch (error) {
      console.error("Error updating status:", error);
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "reviewed":
        return "bg-blue-100 text-blue-800";
      case "shortlisted":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const uniquePositions = Array.from(new Set(applications.map(app => app.job_position)));

  const filteredApplications = applications.filter((app) => {
    const statusMatch = filterStatus === "all" || app.status === filterStatus;
    const positionMatch = filterPosition === "all" || app.job_position === filterPosition;
    return statusMatch && positionMatch;
  });

  const stats = {
    total: applications.length,
    pending: applications.filter((a) => a.status === "pending").length,
    reviewed: applications.filter((a) => a.status === "reviewed").length,
    shortlisted: applications.filter((a) => a.status === "shortlisted").length,
    rejected: applications.filter((a) => a.status === "rejected").length,
  };

  if (loading) {
    return (
      <AdminLayout>
        <BrandedLoader message="LOADING APPLICATIONS..." />
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-brand-navy mb-2">
            Job Applications Management
          </h1>
          <p className="text-gray-600">
            Review and manage all job applications submitted through the career page
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-brand-navy">
                {stats.total}
              </div>
              <div className="text-sm text-gray-600">Total Applications</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-yellow-600">
                {stats.pending}
              </div>
              <div className="text-sm text-gray-600">Pending</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600">
                {stats.reviewed}
              </div>
              <div className="text-sm text-gray-600">Reviewed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-600">
                {stats.shortlisted}
              </div>
              <div className="text-sm text-gray-600">Shortlisted</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-red-600">
                {stats.rejected}
              </div>
              <div className="text-sm text-gray-600">Rejected</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Bulk Actions */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <CardTitle>Applications List</CardTitle>
                <div className="flex gap-2">
                  <Select value={filterPosition} onValueChange={setFilterPosition}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Positions</SelectItem>
                      {uniquePositions.map(position => (
                        <SelectItem key={position} value={position}>{position}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="reviewed">Reviewed</SelectItem>
                      <SelectItem value="shortlisted">Shortlisted</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {selectedIds.length > 0 && (
                <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="text-sm font-medium text-blue-900">
                    {selectedIds.length} selected
                  </span>
                  <div className="flex gap-2 ml-auto">
                    <Select onValueChange={handleBulkStatusChange}>
                      <SelectTrigger className="w-[160px] bg-white">
                        <SelectValue placeholder="Change Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Set to Pending</SelectItem>
                        <SelectItem value="reviewed">Set to Reviewed</SelectItem>
                        <SelectItem value="shortlisted">Set to Shortlisted</SelectItem>
                        <SelectItem value="rejected">Set to Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={handleBulkDelete}>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Selected
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {filteredApplications.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                No applications found
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">
                        <Checkbox
                          checked={selectedIds.length === filteredApplications.length && filteredApplications.length > 0}
                          onCheckedChange={toggleSelectAll}
                        />
                      </TableHead>
                      <TableHead className="w-[15%] min-w-[120px]">Name</TableHead>
                      <TableHead className="w-[15%] min-w-[120px]">Email</TableHead>
                      <TableHead className="w-[12%] min-w-[100px]">Position</TableHead>
                      <TableHead className="w-[10%] min-w-[80px]">CV</TableHead>
                      <TableHead className="w-[10%] min-w-[90px]">Status</TableHead>
                      <TableHead className="w-[12%] min-w-[100px]">Date</TableHead>
                      <TableHead className="w-[26%] min-w-[200px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredApplications.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedIds.includes(app.id)}
                            onCheckedChange={() => toggleSelectOne(app.id)}
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          <div className="truncate max-w-[150px]" title={app.name}>
                            {app.name}
                          </div>
                        </TableCell>
                        <TableCell>
                          <a
                            href={`mailto:${app.email}`}
                            className="text-brand-teal hover:underline flex items-center gap-1"
                            title={app.email}>
                            <Mail className="h-4 w-4 flex-shrink-0" />
                            <span className="truncate max-w-[120px]">{app.email}</span>
                          </a>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4 text-gray-500 flex-shrink-0" />
                            <span className="truncate max-w-[100px]" title={app.job_position}>
                              {app.job_position}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <a
                            href={app.cv_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-teal hover:underline"
                            title={`${app.cv_filename} (${app.cv_size})`}>
                            <Download className="h-4 w-4" />
                          </a>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(app.status)}>
                            {app.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Calendar className="h-4 w-4 flex-shrink-0" />
                            <span className="whitespace-nowrap">
                              {new Date(app.created_at!).toLocaleDateString()}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Select
                              value={app.status}
                              onValueChange={(value) =>
                                updateApplicationStatus(app.id, value)
                              }>
                              <SelectTrigger className="w-[140px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="reviewed">Reviewed</SelectItem>
                                <SelectItem value="shortlisted">
                                  Shortlisted
                                </SelectItem>
                                <SelectItem value="rejected">Rejected</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => deleteApplication(app.id, app.name)}
                              className="text-red-600 hover:bg-red-50 hover:text-red-700 border-red-200 flex-shrink-0">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Application"
        message={`Are you sure you want to delete the application from ${applicationToDelete?.name}? This action cannot be undone.`}
      />

      <DeleteModal
        isOpen={bulkDeleteModalOpen}
        onClose={() => setBulkDeleteModalOpen(false)}
        onConfirm={confirmBulkDelete}
        title="Delete Multiple Applications"
        message={`Are you sure you want to delete ${selectedIds.length} application(s)? This action cannot be undone.`}
      />
    </AdminLayout>
  );
};

export default JobApplicationsAdmin;
