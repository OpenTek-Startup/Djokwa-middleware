import { QueryClient, queryOptions, useQuery } from '@tanstack/react-query';
import { LoaderFunctionArgs } from 'react-router-dom';
import SearchComponent from '../../components/molecules/search-component/Search';
import Heading from '../../components/ui/heading';
import { HttpCommon } from '../../hooks/httpCommon/httpCommon';
import { iStudent } from '../../utils/types';
import DataTable from '../../components/ui/Table';
import { studentColumns } from '../../constants/columns';

const allStudentsQuery = () =>
  queryOptions({
    queryKey: ['all-students'],
    queryFn: async () => {
      const { data } = await HttpCommon.get<{
        users: iStudent[];
      }>('users/allusers', {
        params: {
          role: 'student', //   get all students data
        },
      });
      return data;
    },
  });
export const allStudentLoader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    console.log('params', params);
    return await queryClient.ensureQueryData(allStudentsQuery());
  };

const AllStudents = () => {
  const students = useQuery(allStudentsQuery())?.data as {
    users: iStudent[];
  };
  return (
    <div>
      <Heading className="text-center">All Student Page</Heading>
      <SearchComponent
        containerClassName="ring-[1px] ring-colorPrimary"
        onChange={(e) => alert(e.target.value)}
      />
      {/* {JSON.stringify(students)} */}
      <DataTable columns={studentColumns} data={students.users} />
    </div>
  );
};

export default AllStudents;
