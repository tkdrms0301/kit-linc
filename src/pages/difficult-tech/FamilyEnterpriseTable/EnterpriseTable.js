import { Grid, Table, TableContainer, TableHead, TableBody, TableCell, TableRow, Paper } from '@mui/material';
import { list } from './constant';

const EnterpriseTable = ({ selectedCompanyId, handleEnterpriseChange, enterpriseRows }) => {
    const isSelected = (id) => selectedCompanyId.enterpriseId === id;
    const convertCompanyTypeList = (number) => {
        return list.companyTypeList[Number(number) - 2];
    };
    const convertCategoryList = (number) => {
        return list.categoryList[Number(number) - 2];
    };
    const convertGrowthDegreeList = (number) => {
        return list.growthDegreeList[Number(number) - 2];
    };
    return (
        <Grid>
            <TableContainer component={Paper} sx={{ maxHeight: 350 }}>
                <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>회사 번호</TableCell>
                            <TableCell>회사명</TableCell>
                            <TableCell>회사 유형</TableCell>
                            <TableCell>업종</TableCell>
                            <TableCell>기업 성장도</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {enterpriseRows.map((enterpriseRow, index) => {
                            const isItemSelected = isSelected(enterpriseRow.companyId);
                            return (
                                <TableRow
                                    hover
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    onClick={(event) => handleEnterpriseChange(event, enterpriseRow)}
                                    selected={isItemSelected}
                                >
                                    <TableCell>{enterpriseRow.companyId}</TableCell>
                                    <TableCell>{enterpriseRow.companyName}</TableCell>
                                    <TableCell>{convertCompanyTypeList(enterpriseRow.companyType)}</TableCell>
                                    <TableCell>{convertCategoryList(enterpriseRow.category)}</TableCell>
                                    <TableCell>{convertGrowthDegreeList(enterpriseRow.growthDegree)}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};
export default EnterpriseTable;