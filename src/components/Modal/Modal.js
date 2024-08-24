import { Trash2, X } from "lucide-react";

const Modal = ({ open, onClose, children, onCover = true, className = '' }) => {

    return (
        <div onClick={() => onCover && onClose()} className={`
            fixed inset-0 flex justify-center items-center transition-colors 
            ${open ? "visible bg-black/20 z-30" : 'invisible z-[-1]'}
        `}>
            <div onClick={(e) => e.stopPropagation()} className={`
                bg-white p-6 rounded-xl shadow transition-all relative
                ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}
                ${className}
                `}>
                <button onClick={onClose} className="absolute p-1 text-gray-400 bg-white rounded-lg top-2 right-2 hover:bg-gray-50 hover:text-gray-600">
                    <X />
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;


Modal.Delete = ({ open, onClose }) => {

    return (
        <Modal open={open} onClose={onClose}>
            <div className="w-56 text-center">
                <Trash2 size={56} className="mx-auto text-red-500" />
                <div className="w-48 py-4 mx-auto">
                    <h3 className="text-lg font-black text-gray-800">Xác nhận xóa</h3>
                    <p className="text-sm text-gray-500 ">
                        Bạn có chắc chắn muốn xóa sản phẩm này?
                    </p>
                </div>
                <div className="flex gap-4">
                    <button className="w-full btn btn-danger">
                        Xóa bỏ
                    </button>
                    <button onClick={onClose} className="w-full btn btn-light">
                        Hủy
                    </button>
                </div>
            </div>
        </Modal>
    )
}

Modal.OkCancel = ({ open, onClose, onOk = onClose, title = 'title', icon, subTitle = 'subTitle', OkText = 'OkText', CancelText = 'Hủy' }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <div className="flex flex-col items-center w-56 text-center">
                {icon ? icon : <Trash2 size={56} className="text-red-500 " />}
                <div className="w-48 py-4">
                    <h3 className="text-lg font-black text-gray-800">{title}</h3>
                    <p className="text-sm text-gray-500 ">
                        {subTitle}
                    </p>
                </div>
                <div className="flex w-full gap-3">
                    <button onClick={onOk} className="w-full btn btn-danger">
                        {OkText}
                    </button>
                    <button onClick={onClose} className="w-full btn btn-light">
                        {CancelText}
                    </button>
                </div>
            </div>
        </Modal>
    )
}