import axios from "axios";
import react, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, setLoading, setError } from "../userSlice";
import { Container } from "@mui/material";
import UsersTable from "../components/Table";
const APP_URL = window.env.apiUrl;

export default function Home() {
    const dispatch = useDispatch();

    const getUsersFromApi = async () => {
        try {
            dispatch(setLoading(true));
            const response = await axios.get(`${APP_URL}/api/getUsers`);
            dispatch(addUser(response?.data?.data));
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setError(error));
            console.log(error);
        }
    };
    useEffect(() => {
        getUsersFromApi();
    }, []);
    return (
        <Container mt={6}>
            <h1>User List</h1>
            <UsersTable />
        </Container>
    );
}
