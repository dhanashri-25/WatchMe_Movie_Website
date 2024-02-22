import axios from "axios";

const instance=axios.create({
  baseURL:"https://api.themoviedb.org/3/",
  headers:{
    accept:"application/json",
    Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmI1NTJkNzM5NWFjN2U0NWJkNTJjZmYwZGNhODlmZSIsInN1YiI6IjY1Y2FmMTI1NmRjNTA3MDEzMGIxNTEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8HBHX5BPi-Rw2MznLc88ZFEMdwUydtvSmrT08miM1Yw",
  },
});

export default instance;