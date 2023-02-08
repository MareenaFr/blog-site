import { async } from "@firebase/util";
import { useRef } from "react";
import { firestore } from "./firebase"
import { addDoc,collection}  from "@firebase/firestore"

const Form = () => {
    const messageRef = useRef();
    const ref = collection(firestore, "messages");
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(messageRef.current.value);

        let data = {
            message:messageRef.current.value
        };
        try{
        addDoc(ref, data);
        } catch(e){
            console.log(e);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter message</label>
                <input type="text" ref={messageRef} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;