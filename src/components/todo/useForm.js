import {useState} from 'react';


const useForm=(callback)=>{
    const [FormItem, setForm] = useState({});
    const handleInputChange = e => {
        e.persist();
        setForm({...FormItem, [e.target.name]: e.target.value });
      };
    
     const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        callback( FormItem );
      };
      return [handleInputChange,handleSubmit];
    
}
export default useForm;
