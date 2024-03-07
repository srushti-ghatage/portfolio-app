import React, {useState} from 'react';

const MyForm = () => {
    return (<form>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"/>
        <br/>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"/>
        <br/>
        <input type="submit" value="Submit"></input>
    </form>);    
}

export default MyForm;