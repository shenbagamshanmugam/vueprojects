<template>
    <div id="login" class="col-md-6 maindiv">  
        <div class="login_inner">       
            <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group label="Enter your mail Address :"
                label-for="email" description="We'll never share your email with anyone else.">
                    <b-form-input id="email" class="inputsmall" type="email" v-model="form.email" required
                        placeholder="Enter Email"/>
                </b-form-group>
                <b-form-group label="Enter your name :" label-for="name">
                    <b-form-input id="name" class="inputsmall" type="text" v-model="form.name" required 
                        placeholder="Enter your name"/>
                </b-form-group>
                <div>
                        <b-button type="submit" class="submit_btn" variant="primary">Submit</b-button>
                        <b-button type="reset" class="reset_btn" variant="danger">Reset</b-button>
                </div>
            </b-form>
        </div>
    </div>
</template>
<script>
    export default {
        name : 'loginpage',
        data(){
            return{
                form:{
                    email:'',
                    name:''                    
                }               
            }
        },
        methods:{
            onSubmit(e){         
                alert(JSON.stringify(this.form))      
                if(email==="shenba@gmail.com"){
                    this.$router.push('/listupdate')
                }      
                            
            },
            onReset(e){              
                this.form.email='',
                this.form.name=''
            }
        }
    }
</script>
<style lang="scss">
#login{   
    margin: 0 auto;
    label{
       float: left;
    }  
    .login_inner{
        position: relative;
        top:60px;
    }    
    form{
        width: 75%;
        margin: 0 auto;
    }
    .submit_btn{
        margin-right:2%
    } 
}
</style>



