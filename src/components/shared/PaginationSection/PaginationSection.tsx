import ReactPaginate from 'react-paginate';
import './PaginationSection.scss';

const PaginationSection = () => {

    //pagination
    const handlePageClick = (data: any) => {
        console.log(data.selected)
    }


    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                pageCount={5}
                previousLabel="< prev"
                containerClassName="pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                activeClassName="active"
            />
        </>
    )
}

export default PaginationSection