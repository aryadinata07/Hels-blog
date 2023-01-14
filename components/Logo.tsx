import Image from "next/image";

function Logo(props: any) {
    const {renderDefault, title} = props;
    
  return (
   <div className="flex items-center space-x-2">
    <Image  
    className="rounded-full object-cover" 
    height={50}
    width={50}
    src="https://i.pinimg.com/originals/1f/17/a5/1f17a5fda41ee18509c6cfa099144b2d.jpg" 
    alt="logo"
     />

  <>{renderDefault(props)}</>
   </div>
  )
}

export default Logo