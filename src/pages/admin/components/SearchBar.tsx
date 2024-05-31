export default function SearchBar() {

    

    return (
        <div className="search-bar">
            <form className="search-form d-flex align-items-center">
                <input type="text" name="query" placeholder="Tìm kiếm" title="Nhập từ khóa"/>
                <button type="submit" title="Search"><i className="bi bi-search"></i></button>
            </form>
        </div>
    )
}