import { Button, Card, Chip, Link as HeroLink, LinkIcon } from "@heroui/react";
import NextLink from "next/link";
import React from "react";
import { LuGithub } from "react-icons/lu";

import Works from "../_types/work-type";

const AppCard: React.FC<Works> = ({
  imgPath,
  title,
  description,
  tags,
  siteLink,
  githubLink,
}) => {
  return (
    <Card className="flex flex-col items-center sm:flex-row w-full max-w-xl mx-auto min-h-38">
      <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
        <img
          alt={title}
          className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
          src={imgPath}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8">
            {siteLink ? (
              <HeroLink
                href={siteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
                <LinkIcon />
              </HeroLink>
            ) : (
              title
            )}
          </Card.Title>
          <Card.Description className="whitespace-pre-line text-pretty">
            {description}
          </Card.Description>
        </Card.Header>

        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          {tags && (
            <div className="flex flex-row flex-wrap gap-1">
              {tags.map((tag) => (
                <Chip color="default" size="sm" className="px-2" key={tag}>
                  {tag}
                </Chip>
              ))}
            </div>
          )}

          {githubLink && (
            <div>
              <NextLink
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" isIconOnly variant="secondary">
                  <LuGithub className="text-amber-100" />
                </Button>
              </NextLink>
            </div>
          )}
        </Card.Footer>
      </div>
    </Card>
  );
};

export default AppCard;
