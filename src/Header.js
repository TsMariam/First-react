import React from 'react';


const styles = {
    p: {
    display: 'inlineBlock',
        margin: '20px',
    float: 'right',
    },
};


function Header(){
    return (
        <div className={"Main"} style = {styles.Main}>
            <span style = {styles.p}>Contact</span>
            <span style = {styles.p}>Company</span>
            <p style = {styles.p}>Catalogue</p>
            <p style = {styles.p}>Home</p>
        </div>
    )
};

export default Header;