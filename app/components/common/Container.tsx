type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: Readonly<ContainerProps>) {
  return <div className="flex flex-col gap-6">{children}</div>;
}
