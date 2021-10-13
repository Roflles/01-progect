import React, {useState} from 'react';
import styles from "./Paginator.module.css";


const Paginator = ({currentPage, pageSize, totalItemsCount, onPageChanged, ...props}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / pageSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * pageSize + 1;
    let rightPortionPageNumber = portionNumber * pageSize;


    return <div className={styles.paginator}>
        { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p, index) => {
                return <span className={currentPage === p && styles.selectedPage}
                             key={index}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        { portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }


    </div>
}

/*    Pages(pages, pagesCount, currentPage);


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
}*/

export default Paginator;

