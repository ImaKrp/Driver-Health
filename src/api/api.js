import axios from "axios";

export const googleApi = axios.create({
  baseURL:
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLScPF-ENKkwo0uwcw_z_2uUnzmu2_0SjYSr5CXwV3HUwDrxfQQ",

  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
