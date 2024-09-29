import { View,Text,Image,TouchableOpacity,StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
export default function Screen04 ({navigation}){

    const products = [
        {
          id: 1,
          name: 'Product 1',
          price: 2.99,
          rating: 4.5,
          mainImage: require('../assets/DATA/Container 7 (3).png'),  // Hình ảnh chính
          thumbnailImages: [
            require('../assets/DATA/Container 7 (1).png'),
            require('../assets/DATA/Container 7 (2).png'),
            require('../assets/DATA/Container 7 (4).png'),
          ]
        },
        {
          id: 2,
          name: 'Product 2',
          price: 3.99,
          rating: 4.2,
          mainImage: require('../assets/DATA/Container 7 (2).png'),
          thumbnailImages: [
            require('../assets/DATA/Container 7 (3).png'),
            require('../assets/DATA/Container 7 (1).png'),
            require('../assets/DATA/Container 7 (4).png'),
          ]
        },
        {
          id: 3,
          name: 'Product 3',
          price: 5.99,
          rating: 4.8,
          mainImage: require('../assets/DATA/Container 7 (1).png'),
          thumbnailImages: [
            require('../assets/DATA/Container 7 (2).png'),
            require('../assets/DATA/Container 7 (4).png'),
            require('../assets/DATA/Container 7 (3).png'),
          ]
        },
      ];

    const [selectedProduct, setSelectedProduct] = useState(products[0]);  
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity,setQuantity] = useState(0)
    const handleThumbnailClick = (product) => {
        setSelectedProduct(product);
    };
    
    const handleQuantityIncrease = () =>{
        setQuantity(quantity+1)
    }
    const handleQuantityDiminis = () =>{
       if(quantity > 0 ){
          setQuantity(quantity-1)
       }
       else{
            setQuantity(0)
       }
    }
    return (
        <View style={{overflow:'scroll'}}>
           <View style = {{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Icon  name = "arrow-left"></Icon>
                <Text style={{fontWeight:'700',marginLeft:'20px'}}>Product name</Text>
           </View>

          <View style={{width:'100%',marginLeft:'10%'}}>
               <View> 
                    <Image source={require('../assets/DATA/Container 7 (3).png')}></Image>
               </View>
    
               <View style={{display:'flex',flexDirection:'row'}}>
                        <Image source={require('../assets/DATA/Container 7 (2).png')}></Image>
                        <Image source={require('../assets/DATA/Container 7 (1).png')}></Image>
                        <Image source={require('../assets/DATA/Container 7 (4).png')}></Image>
                        <Image source={require('../assets/DATA/Container 7.png')}></Image>
               </View>
               <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'20px'}}>
                     <Text style={{color:'#28bfcd', fontSize:'25px',fontWeight:'800'}}>$2.99</Text>   
                     <View style={{width:'100px',height:'30px',padding:'10px',backgroundColor:'#e3b2b9',alignItems:'center',justifyContent:'center'}}> 
                         <Text style={{color:'red',fontSize:'13px'}}>Buy 1 get 1</Text> 
                    </View>
               </View>

            

                   <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}> 
                        <View>
                            <Text style={{fontWeight:'600',fontSize:'20px'}}>Product name</Text>
                            <Text>Ocaca estr desrrunt tempor offici</Text>
                        </View>

                       <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginLeft:'30px'}}>
                            <Image source={require('../assets/DATA/Rating 3.png')}></Image>
                            <Text>4.5</Text>
                       </View>
                   </View>

                   <Text style={{ marginBottom: 10 }}>Size</Text>
            <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 20 }}>
                {['S', 'M', 'L', 'XL'].map((size) => (
                    <TouchableOpacity 
                        key={size} 
                        style={[
                            styles.size, 
                            { backgroundColor: selectedSize === size ? '#28c5da' : 'transparent' }
                        ]}
                        onPress={() => setSelectedSize(size)}>
                        <Text>{size}</Text>
                    </TouchableOpacity>
                ))}
            </View>
               
                  <Text style={{marginTop:'30px'}}>Quantity</Text>

                  <View style={{display:'flex',flexDirection:'row'}}>
                        <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>{handleQuantityDiminis()}} style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#dddd',height:'40px',width:'40px'}}>
                                    -
                                    </TouchableOpacity>
                                    <View style={{marginLeft:'10px',marginRight:'10px'}}>{quantity}</View>
                                    <TouchableOpacity onPress={()=>{handleQuantityIncrease()}} style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#28c5da',height:'40px',width:'40px',borderRadius:'100%'}}>
                                    +
                                </TouchableOpacity>
                        </View>

                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginLeft:'100px'}}>
                            <Text>Total</Text>
                            <Text style={{fontWeight:'700',marginLeft:'10px'}}>$4.98</Text>
                        </View>
                  </View>

                  <Text style={{marginTop:'20px',marginBottom:'30px',fontWeight:'700'}}>Size guide</Text>
                  <Text style={{fontWeight:'700'}}>Reviews(99)</Text>

                <TouchableOpacity style={{marginTop:'10px',width:'300px',height:'30px',display:'flex',justifyContent:'center',alignItems:'center', borderRadius:'5px',backgroundColor:'#24c3d9',flexDirection:'row'}}>
                    <Text style={{color:'white'}}>Add to Cart</Text>
                </TouchableOpacity>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    size: {
        width:'30px',
        height:'20px', 
        borderWidth:'1px',
        borderColor:'black',
        alignItems:'center', 
        
    }
})