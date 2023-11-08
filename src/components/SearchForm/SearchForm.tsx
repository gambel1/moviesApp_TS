import { useLocation, useNavigate } from 'react-router-dom';
import { Input, Form } from 'antd';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const { Search } = Input;

export default function SearchForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const onSearch = (value: string) => {
    navigate({
      ...location,
      search: `query=${value}`,
    });
    if (value !== '') {
      setTimeout(() => {
        Notify.success('Request successfull');
      }, 300);
    } else {
      Notify.warning('Enter something');
    }
  };

  return (
    <div>
      <Form>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="middle"
          onSearch={onSearch}
          style={{
            width: '30%',
          }}
        />
      </Form>
    </div>
  );
}
