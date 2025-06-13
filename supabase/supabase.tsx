import { Platform } from "react-native";

export const supabase =
  Platform.OS === "web"
    ? require("../supabase/client-web").supabase
    : require("../supabase/client-mobile").supabase;
