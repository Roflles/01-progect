import React from 'react';
import style from "./Paginator.module.css";


const Paginator = ({currentPage, pageSize, totalUsersCount, onPageChanged, ...props}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    Pages(pages, pagesCount, currentPage);


    return (
        <div className={style.selectedPagesDefold}>
            {pages.map((p, index) => {
                return <span key={index}
                             className={currentPage === p && style.selectedPage}
                             onClick={(event) => {
                                onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
    )
}

const Pages = (pages, pagesCount, currentPage) => {
    if (pagesCount > 10) {
        if (currentPage > 5) {
            for (let i = currentPage - 4; i <= currentPage + 4; i++) {
                pages.push(i)
                if (i == pagesCount) break
            }
        } else {
            for (let i = 1; i <= 10; i++) {
                pages.push(i)
                if (i == pagesCount) break
            }
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }
}

export default Paginator;

