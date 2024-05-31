import clsx from "clsx";

export default function Footer({isToogleSidebar}: any) {

    return (
        <footer id="footer" className={clsx('footer', isToogleSidebar ? 'toggle-sidebar' : '')}>
            <div className="copyright">
                &copy; Copyright <strong><span>2024</span></strong>.
            </div>
        </footer>
    )
}