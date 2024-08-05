import { JSX, useState } from "react"
import "./SearchBox.css"

function SearchBox(): JSX.Element {
    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <div className={`search__box__container ${isActive ? "clicked" : null}`}>
            <input
                type="text"
                id="search"
                placeholder="Поиск"
                className={`search__box`}
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
            />
        </div>
    )
}

export default SearchBox