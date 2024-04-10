import {NextRouter, useRouter} from "next/router";
import Card from "@mui/material/Card";
import Table from '@mui/material/Table'
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import TableBody from "@mui/material/TableBody";
import {useEffect, useState} from "react";
import axios from "axios";
import {formatKSTDateTime} from "../../utils/format";
import {GitLabelColor, GitStatusColor} from "../../@core/layouts/types";

export interface GitIssueTable {
    url: string;
    issueNum: number;
    id: number;
    repositoryUrl: string;
    title: string;
    labels: string[];
    state: string;
    createdAt: number;
    updatedAt: number;
    closedAt: number;
    repoNm: string;
    repoId: number;
}

interface LabelObj {
    [key: string]: {
        color: GitLabelColor
    }
}

interface StatusObj {
    [key: string]: {
        color: GitStatusColor
    }
}

const statusObj: StatusObj = {
    open: {color: 'open'},
    closed: {color: 'closed'},
}

const labelObj: LabelObj = {
    refactoring: {color: 'refactoring'},
    deploy: {color: 'deploy'},
    issue: {color: 'issue'},
    feature: {color: 'feature'},
    'up-to-date': {color: 'up-to-date'},
    release: {color: 'release'},
    hotfix: {color: 'hotfix'}
}

const GitIssues = () => {

    const router: NextRouter = useRouter();

    const handleClick = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }

    const [rows, setRows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3031/octokit/issues');
                setRows(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData().then(r => undefined);
    }, []);

    if (rows.length === 0) {
        return <div>데이터를 불러오는 중입니다...</div>;
    }

    return (
        <Card>
            <TableContainer>
                <Table
                    sx={{minWidth: 800}} aria-label='table in dashboard'
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>issue title</TableCell>
                            <TableCell>Repo</TableCell>
                            <TableCell>state</TableCell>
                            <TableCell>created At</TableCell>
                            <TableCell>updated At</TableCell>
                            <TableCell>closed At</TableCell>
                            <TableCell>labels</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row: GitIssueTable) => (
                            <TableRow hover key={row.id} sx={{'&:last-of-type td, &:last-of-type th': {border: 0}}}>
                                <TableCell sx={{py: theme => `${theme.spacing(0.5)} !important`}}>
                                    <Typography sx={{
                                        fontWeight: 500,
                                        fontSize: '0.875rem !important'
                                    }}>{row.title}</Typography>
                                </TableCell>
                                <TableCell>{row.repoNm}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={row.state}
                                        color={statusObj[row.state].color}
                                        sx={{
                                            height: 24,
                                            fontSize: '0.75rem',
                                            textTransform: 'capitalize',
                                            '& .MuiChip-label': {fontWeight: 500}
                                        }}
                                    />
                                </TableCell>
                                <TableCell>{formatKSTDateTime(row.createdAt)}</TableCell>
                                <TableCell>{formatKSTDateTime(row.updatedAt)}</TableCell>
                                <TableCell>{formatKSTDateTime(row.closedAt)}</TableCell>
                                <TableCell>
                                    {row.labels.map((label: string) => (
                                        <Chip key={label}
                                              label={label}
                                              color={labelObj[label].color}
                                              sx={{
                                                  height: 24,
                                                  fontSize: '0.75rem',
                                                  textTransform: 'capitalize',
                                                  '& .MuiChip-label': {fontWeight: 500}
                                              }}
                                        />
                                    ))}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default GitIssues