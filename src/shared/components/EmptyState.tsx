import clsx from "clsx";

export default function EmptyState({className, content}: any) {

    return (
        <div className={clsx(
            "w-100 flex-center",
            className
        )}>
            <span>{content ?? "Không tải được dữ liệu!"}</span>
        </div>
    )
}