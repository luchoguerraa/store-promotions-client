import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './SearchProducts.css'
const SearchProducts = props =>{
    const { onSearch } = props
    const [inputSearch, setInputSearch] = useState('')
    const handleSearch = () =>{
        onSearch(inputSearch);
    }
    return (
    <div className="searchProduct-container">
        <div>
            <label className="label-product">Productos </label>
             &nbsp;
             <input onChange={e => setInputSearch(e.target.value)}
              size="100"
              type="text"
              placeholder=" Ingrese marca, codigo o descripción"
               /> 
             &nbsp;
             <button onClick={handleSearch}>Buscar</button>
        </div>
    </div>)
}

SearchProducts.propTypes = {
    onSearch: PropTypes.func,
}

export default SearchProducts
