import { useEffect, useState } from "react";

export function useSurvey(data?: APISurvey) {
  const [loading, setLoading] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [items, setItems] = useState<SurveyItem[]>([]);
  const [name, setName] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string>("");

  useEffect(() => {
    if (data) {
      setEndDate(new Date(data?.expiryDate));
      setDescription(data.description);
      setItems(data.items);
      setName(data.name);
      setStartDate(new Date(data?.startDate));
      setTags(data.tags);
    }
  }, [data]);

  return {
    description,
    endDate,
    isOpen,
    items,
    loading,
    name,
    setDescription,
    setEndDate,
    setItems,
    setLoading,
    setName,
    setOpen,
    setStartDate,
    setTags,
    startDate,
    tags,
  };
}
