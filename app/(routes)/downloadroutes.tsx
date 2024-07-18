import {
 
  LiaAddressCard,
  
} from "react-icons/lia";
interface sroutes {
  path: string;
  label: string;
  icon?: React.ReactNode;
}
 const downloadroutes  = [
    { path: '', label: 'Term 1 Science ',icon: <LiaAddressCard className="text-sky-950 h-10 w-10" /> },
    { path: '', label: 'Term 1 Maths ',icon: <LiaAddressCard className="text-sky-950 h-10 w-10" /> },
    { path: '', label: 'Term 1 English ',icon: <LiaAddressCard className="text-sky-950 h-10 w-10" /> },
    { path: '', label: 'Term 1 French ',icon: <LiaAddressCard className="text-sky-950 h-10 w-10" /> },
    { path: '', label: 'Term 1 Civics ',icon: <LiaAddressCard className="text-sky-950 h-10 w-10" /> },
  ];
  
  export default  (downloadroutes) ;
  