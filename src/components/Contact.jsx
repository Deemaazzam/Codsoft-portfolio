import {useState,useRef} from 'react';
import {motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
//template_lktq7i4
//service_937iwcl
// dI_oJUaLNOElmZrND
const Contact = () => {
  const formRef=useRef();
  const [loading,setLoading]=useState(false);
  const [form,setForm]=useState({
    name:'',
    email:'',
    message:''
  })
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setForm({...form,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_937iwcl','template_lktq7i4',{
      from_name:form.name,
      to_name:'dima',
      from_email:form.email,
      to_email:'azzamdima353@gmail.com',
      message:form.message
    },'dI_oJUaLNOElmZrND').then(()=>{
      setLoading(false);
      alert('Thank you for your message!');
      setForm({
        name:'',
        email:"",
        message:""
      },error=>{
        setLoading(false);
        alert('Something went wrong')
      })
    })
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col flex gap-10 overflow-hidden'>
          <motion.div variants={slideIn('left','tween',0.2,1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl '>
              <p className={`${styles.sectionSubText}`}>Get in Touch</p>
              <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
              <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='mt-12 flex flex-col gap-8'>
                <label className='flex flex-col'><span className='text-white font-weight mb-4'>Your Name</span></label>
                <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='What is your name?'
                className='bg-tertiary py-4 px-6 placeholder:color-secondary text-white rounded-lg outline-none border-none font-medium'/>
              
              <label className='flex flex-col'><span className='text-white font-weight mb-4'>Your Email</span></label>
                <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='What is your email?'
                className='bg-tertiary py-4 px-6 placeholder:color-secondary text-white rounded-lg outline-none border-none font-medium'/>
                <label className='flex flex-col'><span className='text-white font-weight mb-4'>Your Message</span></label>
                <textArea
                rows='4'
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What is your message?'
                
                className='bg-tertiary py-4 px-6 placeholder:color-secondary text-white rounded-lg outline-none border-none font-medium'/>
                <button
                className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl '
                type='submit'>{loading?'Sending...':'Send'}</button>
                </form>
          </motion.div>
          <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,'contact');