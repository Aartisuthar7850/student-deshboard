import { supabase } from "./supabase";
import { Course } from "../type/course";

export async function getCourse(): Promise<Course[]> {
  const { data, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
}
