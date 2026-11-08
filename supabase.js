import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://pgobzwtqepkmvunjjzar.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_BALJmr-iYR6EnLqkV_IsTA_Eizur-kM";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);