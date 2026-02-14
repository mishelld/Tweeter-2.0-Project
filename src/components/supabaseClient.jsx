import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fldwhfqeymfxhmsbdqim.supabase.co";
const supabaseKey = "sb_publishable_w4uBk1IsOFqXO7LclVzxvg_ARNb8fbZ";

export const supabase = createClient(supabaseUrl, supabaseKey);
