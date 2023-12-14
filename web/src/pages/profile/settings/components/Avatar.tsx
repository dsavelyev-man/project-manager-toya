const Avatar = () => {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">Аватар</span>
      </div>
      <input
        type="file"
        className="file-input input-bordered w-full max-w-xs"
      />
    </label>
  );
};

export default Avatar;
