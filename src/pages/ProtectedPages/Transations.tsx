import UserProfileCard from '../../components/molecules/UserProfileCard/UserProfileCard';
import DataTable, { columns, payments } from '../../components/ui/Table';

const Transations = () => {
  return (
    <div>
      <UserProfileCard />
      <DataTable columns={columns} data={payments}></DataTable>
    </div>
  );
};

export default Transations;
