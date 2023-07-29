import {
    Box,
    Card,
    Paper,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Table,
    Skeleton,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const TableSkeleton = ({ rowCount, colCount }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {Array.from({ length: colCount }, (_, index) => (
                        <TableCell key={index}>
                            <Skeleton animation="wave" />
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {Array.from({ length: rowCount }, (_, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {Array.from({ length: colCount }, (_, colIndex) => (
                            <TableCell key={colIndex}>
                                <Skeleton animation="wave" />
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

function UsersTable() {
    const users = useSelector((state) => state.user);
    console.log(users);
    if (users?.loading) {
        return <TableSkeleton rowCount={6} colCount={1} />;
    }
    return (
        <Box>
            <Card variant="outlined">
                {!users?.loading && users?.users?.length && (
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Sr no.</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users?.users?.map((row, i) => (
                                <TableRow key={row.id}>
                                    <TableCell scope="row">{i + 1}</TableCell>
                                    <TableCell scope="row">
                                        {row?.name}
                                    </TableCell>
                                    <TableCell scope="row">
                                        {row?.email}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
                {!users?.loading && users?.users?.length < 0 && (
                    <Card style={{ padding: "2rem", textAlign: "center" }}>
                        No data Found
                    </Card>
                )}
            </Card>
        </Box>
    );
}

export default UsersTable;
