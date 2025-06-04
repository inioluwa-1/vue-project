import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
       name: 'Inioluwa George Guller Gavi Jude',
       allUsers: '',
       allusersarray: []
    }),
    actions: {
        recieveuser(username,fullname,password){
            let allUsers = {
                username,
                fullname,
                password
            }
            // this.allUsers = allUsers;
            this.allusersarray.push(allUsers);
            
        },
        getuser(){
            return this.allusersarray;
        }
    }
})