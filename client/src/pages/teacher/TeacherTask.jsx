import axios from "axios";

function TeacherTask() {
  const handleFileUpload = async (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    await axios.post("/upload", formData);
  };

  return (
    <form>
      <input type="file" onChange={handleFileUpload} />
    </form>
  );
}

export default TeacherTask;
