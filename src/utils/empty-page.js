import ZYEmptyPage from "../components/empty-page";

export function emptyPage(title) {
  return props => {
    return (
      <ZYEmptyPage title={title}></ZYEmptyPage>
    )
  }
}
