import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle">
        <div className="flex w-full items-center  px-4 pb-8 pt-14  sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};
