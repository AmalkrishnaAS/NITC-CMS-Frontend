

export const userFactory= (user)=>{
    if(user.role=='committee head') {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            type: user.type,
            role: user.role,

        }

    }

        if(user.role=='committee') {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                type: user.type,
                role: user.role,
                designation: user.designation,

            }
        }

        return {
            id: user.rollno,
            name: user.name,
            email: user.email,
            department: user.department,
            role: user.role
        

        }
    
}