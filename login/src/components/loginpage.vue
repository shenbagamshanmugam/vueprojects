<template>
    <div id="login">
       <b-form @submit="onSubmit" @reset="onReset">
           <b-form-group id="loginform" label="Enter your mail Address :"
           label-for="email" description="We'll never share your email with anyone else.">
            <b-form-input id="email" type="email" v-model="form.email" required
            placeholder="Enter Email"/>
           </b-form-group>
           <b-button type="submit" variant="primary">Submit</b-button>
           <b-button type="reset" variant="danger">Reset</b-button>
       </b-form>
    </div>
</template>
<script>
    export default {
        name : 'loginpage',
        data(){
            return{
                form:{
                    email:''
                }               
            }
        },
        methods:{
            onSubmit(e){
                e.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(e){
                e.preventDefault()
                this.form.email=''
            }
        }
    }
</script>


