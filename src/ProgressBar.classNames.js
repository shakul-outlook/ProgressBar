import { mergeStyleSets } from "@fluentui/react";

export const getClassNames = (props) => {
  const { bgcolor, completed } = props;
 return  mergeStyleSets({
   baseStack :  {
      height: '100%',
      width:'100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      border: "0.1rem solid red",
      
    },

    baseStack1 :  {
      height: '1rem',
      width:'100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      border: "0.1rem solid red",
      
    },


    fillStack :{
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        // textAlign: 'right',
        border: "0.1rem solid blue",
        // fontSize: "20px",
        color: 'white',
      },
    stackItemStyles : {
      
    
      border: "0.1rem solid red",
      fontSize: "40px",
      fontWeight: 'bold',

  },
  stackItemStyles1 : {
     
   
     
      fontSize: "20px",
      fontWeight: 'bold',
      border: "0.1rem solid red",
    },


  });
}