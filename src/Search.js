
import React from 'react';


const style = {
    padding: '3px',
    height: '15px',
    border: '1px solid black',
    borderRadius: '5px',
    width: '500px',
    outline: 0,
    };

function Search(){
    return (
        <div>
            <form>
                <label>
                    <input
                        type = "text"
                        style = {style}
                    />
                    <button>
                        Search
                    </button>
                </label>
            </form>
        </div>
    )
}

export default Search;
