import { useSelector } from "react-redux"

export const Hotels = ({...props}) => {
    const {authenticated, roles, username} = useSelector(
        (state: any) => state.auth
    )

    console.log(roles)

    if(!roles.find((elm: string) => elm === 'Role_ADMIN')){
        return(
            <p>You are waaaaaay off course, Dude !!!!</p>
        )
    } else {
        return(
            <p>User is a fuckin' admin !</p>
        )
    }

}