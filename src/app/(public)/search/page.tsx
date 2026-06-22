import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SearchBar } from "@/components/search/SearchBar";
import { SearchFilters } from "@/components/search/SearchFilters";

export default function SearchPage() {
  return (
    <>
      <PageHeader title="Search" description="Find psalms by mood, tempo, instrument, or release status." />
      <Container className="pb-12">
        <SearchBar />
        <SearchFilters />
      </Container>
    </>
  );
}
