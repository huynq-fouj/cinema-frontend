export default function BannerItem({ img }: any) {

    return (
        <div className="banner-item">
            <img src={img} alt="" className="img-fluid w-100"/>
        </div>
    )
}