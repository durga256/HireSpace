import './input-form.css';

export default function InputForm(props) {
    const onClickHandler = () => {
        props.setNameEntered('Jane')
    }
    return(
        <form>
            <input type='text' placeholder="userid"/>
            <input type='password' placeholder="password"/>
            <button onClick={onClickHandler}>Submit</button>
        </form>
    );

}