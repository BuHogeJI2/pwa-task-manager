import useAxios from 'axios-hooks';

export default function Main({ children }) {
  const [{ data, loading }] = useAxios('/api/tasks');

  console.log({ data, loading });

  return (
    <div>
      <p>Main</p>
      {children}
    </div>
  );
}
