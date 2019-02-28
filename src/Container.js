import React from 'react';
import logo1 from './logo1.png';


const styles = {
    cell: {
        float: 'right',
        marginTop: '100px',
        marginLeft: '30px',

    },
    logo: {
        marginLeft: '0',
    },
    h5: {
        fontSize: '12px',
        margin: '0',
    },
    p: {
        fontSize: '9px',
        margin: '0'
    }

}

function Container(){
    return (
        <div className={"cell"} style={styles.cell}>
            <div className={"logo"} style={styles.logo}>
                <img src={logo1}width={'150'} height={'150'} />
                <p style={styles.p}>EUR 20,59</p>
                <h5 style={styles.h5}>Product name lorem</h5>
                <h5 style={styles.h5}>ipsum dolor</h5>
                <p style={styles.p}>Lorem ipsum dolor sit amet qui lisque</p>
                <p style={styles.p}>scripserit in, ne pri suas labitur, su duo</p>
                <p style={styles.p}>brute veniam</p>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Container;
