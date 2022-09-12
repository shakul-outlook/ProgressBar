import { Stack, StackItem } from "@fluentui/react";

const StackTest = () => {

    const baseStack =  {
        height: '50rem',
        width:'100rem',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        border: "0.1rem solid red",
        
      }

//     const fillStack = {
//         height: '100%',
//         width: `${completed}%`,
//         backgroundColor: bgcolor,
//         borderRadius: 'inherit',
//         textAlign: 'right',
//         border: "0.1rem solid blue",
//         fontSize: "20px",
//         color: 'white',
//       }

//       const stackItemStyles = {
//         alignItems: 'right',

//         display: 'flex',
//         height: 50,
//         justifyContent: 'right',
//         width: 50,
//         border: "0.1rem solid red",
//       };

//       const labelStyles = {
//         padding: 5,
//         color: 'white',
//         fontWeight: 'bold',
//         border: "0.1rem solid blue",
//       }
  
// console.log("SHAKUL  ====",completed)
const stackItemStyles = {
    alignItems: 'center',
 
    display: 'flex',
    height: 50,
    justifyContent: 'center',
    width: 50,
    border: "0.1rem solid red",
  };
    return (
      
     <Stack align="right" className={baseStack} >
           {/* <Stack style={fillStack} horizontal horizontalAlign="space-between">
           <Stack.Item style={stackItemStyles}><span>{`${completed}%`}</span></Stack.Item>
      </Stack> */}

<Stack.Item  align="end"  className={stackItemStyles}>1</Stack.Item>
<Stack.Item className={stackItemStyles}>1</Stack.Item>
<Stack.Item className={stackItemStyles}>1</Stack.Item>
 
      </Stack>
     
 
    );
  };
  
  export default StackTest;