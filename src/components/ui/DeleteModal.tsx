import { AlertTriangle, X } from 'lucide-react';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

const DeleteModal = ({ isOpen, onClose, onConfirm, title, message }: DeleteModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Icon Header */}
        <div className="flex flex-col items-center pt-8 pb-6 px-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 text-center" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em'}}>
            {title}
          </h3>
        </div>

        {/* Body */}
        <div className="px-6 pb-6">
          <p className="text-slate-600 text-center leading-relaxed" style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}>
            {message}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 p-6 bg-slate-50">
          <button
            onClick={onClose}
            className="flex-1 px-5 py-3 border-2 border-slate-300 text-slate-700 hover:bg-white hover:border-slate-400 rounded-xl transition-all duration-200 font-semibold"
            style={{fontFamily: 'Inter, system-ui, sans-serif'}}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="flex-1 px-5 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{fontFamily: 'Inter, system-ui, sans-serif'}}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
