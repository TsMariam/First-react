import React from 'react';


const styles = {
    Main: {
        marginTop: '30px',
        marginLeft: '20px',
        float: 'left',
        textAlign: 'left',
    },
    Options: {
        backgroundColor: '#DCDCDC',
        float: 'left',
        textAlign: 'left',
        fontSize: '15px',
    }

};


function Sidebar(){
    return (
        <div className={"Main"} style = {styles.Main}>
            <h3>Select Category</h3>
            <div className={"Options"} style = {styles.Options}>
                <p>First Category</p>
                <p>Second Category</p>
                <p>Third Category</p>
                <p>Fourth Category</p>
                <p>Fifth Category</p>
                <p>Sixth Category</p>
            </div>
        </div>
    )
}

export default Sidebar;