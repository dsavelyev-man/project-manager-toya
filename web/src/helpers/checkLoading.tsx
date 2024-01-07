import { ReactElement } from "react";

const checkLoading = <T,>(
  loading: boolean,
  value: T[] | T,
  error: ReactElement,
  result: ReactElement[] | ReactElement,
) => {
  if (loading) {
    return (
      <div className="h-full flex justify-center items-center">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  } else {
    if (Array.isArray(value)) {
      if (value.length === 0) return error;
      return result;
    }
  }

  return <div>test</div>;
};

export default checkLoading;
